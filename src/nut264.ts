import * as nut from "@nut-tree/nut-js"

async function main() {
	await nut.sleep(2000)
	await nut.keyboard.pressKey(nut.Key.LeftSuper, nut.Key.LeftShift, nut.Key.P)
	await nut.keyboard.releaseKey(nut.Key.LeftSuper, nut.Key.LeftShift, nut.Key.P)

	await nut.keyboard.pressKey(nut.Key.Enter)
	await nut.keyboard.releaseKey(nut.Key.Enter)
}

main()
