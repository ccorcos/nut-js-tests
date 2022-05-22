import * as nut from "@nut-tree/nut-js"

async function main() {
	await nut.sleep(2000)
	await nut.keyboard.pressKey(nut.Key.LeftSuper)
	await nut.mouse.leftClick()
	await nut.keyboard.releaseKey(nut.Key.LeftSuper)
}

main()
