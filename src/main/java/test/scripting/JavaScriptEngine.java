package test.scripting;

import java.io.InputStreamReader;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public final class JavaScriptEngine {

    private static JavaScriptEngine instance;

    private Invocable jsInvocable;

    public static JavaScriptEngine getInstance() {

        if (instance == null) {

            synchronized (JavaScriptEngine.class) {

                if (instance == null) {
                    instance = new JavaScriptEngine();
                }

            }

        }

        return instance;
    }

    private JavaScriptEngine() {
        load();
    }

    public void reload() {
        load();
    }

    @SuppressWarnings("unchecked")
    <T> T invoke(String functionName, Object... args) {

        try {
            return (T) jsInvocable.invokeFunction(functionName, args);
        } catch (final NoSuchMethodException noSuchMethodException) {
            noSuchMethodException.printStackTrace();
        } catch (final ScriptException scriptException) {
            scriptException.printStackTrace();
        }

        return null;
    }

    private final void load() {
        final ScriptEngineManager engineMgr = new ScriptEngineManager();
        final ScriptEngine jsEngine = engineMgr.getEngineByName("nashorn");

        try {
            jsEngine.eval(new InputStreamReader(getClass().getResourceAsStream("/js/validation.js")));
        } catch (final ScriptException scriptException) {
            scriptException.printStackTrace();
        }

        jsInvocable = (Invocable) jsEngine;
    }

}
