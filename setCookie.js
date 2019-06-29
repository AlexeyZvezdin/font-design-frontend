const { log } = console;

Cookies.set("name", "value", { expires: 7, path: "" });

log(Cookies.get("name"));
