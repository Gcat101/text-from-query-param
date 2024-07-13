let params = new URLSearchParams(window.location.search)
let paramName = params.get("param")
let content = params.get(paramName)
document.getElementById("p").textContent = content