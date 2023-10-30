const input = document.querySelector(".input");

// initial focus setter
input.focus();
window.addEventListener("click", () => input.focus())

// utils
function getInputValue() {
	return document.querySelector(".input").innerHTML;
}

// typewriter
function write(el, text, cb) {
	let index = 0;
	el.innerHTML = ""; // reset line
	
	return function append() {
		if (index >= text.length) {
			cb();
			return
		}
		setTimeout(() => {
			el.innerHTML = el.innerHTML.concat(text[index])
			index++;
			append()
		}, Math.floor(Math.random() * (300 - 100 + 1) + 100))
	}
}

// process input
document.addEventListener('keydown', ({ code }) => {
	console.log(code)
	
	if (code === "Enter") {

		// process --help command
		if (getInputValue() === "--help" || getInputValue() === "-h") {
			// display command list
			document.querySelector(".input").innerHTML = "";
			document.querySelector(".input").innerHTML = `
				<table>
					<tr>
						<th>Command</th>
						<th>Options</th>
						<th>Details</th>
					</tr>
					<tr>
						<td>--h</td>
						<td>-</td>
						<td>Display all commands</td>
					</tr>
				</table>
			`
			return
		}
		
		
		document.querySelector(".input").innerHTML = "";
		document.querySelector(".input").setAttribute("contenteditable", false);										
		
		const processInput = write(document.querySelector(".prefix"), "Processing, please wait...", () => {
			const typeResponse = write(document.querySelector(".prefix"), "C:/User/Falken >", () => {
				document.querySelector(".input").setAttribute("contenteditable", true);
			})
			typeResponse();
		});
		
		processInput();
	}
});