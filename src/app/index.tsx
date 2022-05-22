document.addEventListener("keydown", (event) => {
	console.log(
		"keydown",
		event.key,
		event.shiftKey,
		event.metaKey,
		event.altKey,
		event.ctrlKey
	)
})

document.addEventListener("click", (event) => {
	console.log("click", event.metaKey)
})

document.addEventListener("keydown", (event) => {
	console.log("keydown", event.key, event.metaKey)
})

document.addEventListener("keyup", (event) => {
	console.log("keyup", event.key, event.metaKey)
})
