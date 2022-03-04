/* eslint-disable default-case */
import { useEffect, useRef, useState } from 'react';
import { words, test } from './words';

function App() {
	const [current, setCurent] = useState(1);
	const [input, setInput] = useState({
		w1: '',
		w2: '',
		w3: '',
		w4: '',
		w5: '',
		w6: '',
	});
	const inputRef = useRef(input);
	const currentRef = useRef(current);

	const refs = {
		w11: useRef(),
		w12: useRef(),
		w13: useRef(),
		w14: useRef(),
		w15: useRef(),
		w21: useRef(),
		w22: useRef(),
		w23: useRef(),
		w24: useRef(),
		w25: useRef(),
		w31: useRef(),
		w32: useRef(),
		w33: useRef(),
		w34: useRef(),
		w35: useRef(),
		w41: useRef(),
		w42: useRef(),
		w43: useRef(),
		w44: useRef(),
		w45: useRef(),
		w51: useRef(),
		w52: useRef(),
		w53: useRef(),
		w54: useRef(),
		w55: useRef(),
		w61: useRef(),
		w62: useRef(),
		w63: useRef(),
		w64: useRef(),
		w65: useRef(),
	};

	//change ref based on input
	useEffect(() => {
		inputRef.current = input;
		currentRef.current = current;
	}, [input, current]);

	useEffect(() => {
		localStorage.setItem('answer', generateRandomWord());
		const listener = (e) => {
			if (e.key === 'Enter') {
				if (inputRef.current[`w${currentRef.current}`].length === 5) {
					const res = validateWord();
					if (res === null) {
						alert('Not in word list!!!');
					} else {
						res.forEach((value, index) => {
							let classname;
							switch (value) {
								case 1:
									classname = 'green';
									break;
								case 0:
									classname = 'grey';
									break;
								case -1:
									classname = 'orange';
									break;
							}
							refs[`w${currentRef.current}${index + 1}`].current.classList.add(classname);
						});
						setCurent((prev) => prev + 1);
					}
				}
				if (currentRef.current === 6) {
					setTimeout(() => {
						alert(`Corect answer: ${localStorage.getItem('answer')}`);
					}, 1000);
				}
			} else if (e.key === 'Backspace') {
				deleteLetter();
			} else if (!e.ctrlKey && (e.keyCode < 112 || e.keyCode > 123)) {
				inputLetter(e.key);
			}
		};
		document.addEventListener('keydown', listener);

		return () => {
			document.removeEventListener('keydown', listener);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const generateRandomWord = () => {
		const random = Math.floor(Math.random() * words.length);
		return words[random];
	};

	const inputLetter = (key) => {
		switch (currentRef.current) {
			case 1: {
				setInput((prev) => {
					return {
						w1: prev.w1.length < 5 ? prev.w1 + key : prev.w1,
						w2: prev.w2,
						w3: prev.w3,
						w4: prev.w4,
						w5: prev.w5,
						w6: prev.w6,
					};
				});
				break;
			}
			case 2: {
				setInput((prev) => {
					return {
						w1: prev.w1,
						w2: prev.w2.length < 5 ? prev.w2 + key : prev.w2,
						w3: prev.w3,
						w4: prev.w4,
						w5: prev.w5,
						w6: prev.w6,
					};
				});
				break;
			}
			case 3: {
				setInput((prev) => {
					return {
						w1: prev.w1,
						w2: prev.w2,
						w3: prev.w3.length < 5 ? prev.w3 + key : prev.w3,
						w4: prev.w4,
						w5: prev.w5,
						w6: prev.w6,
					};
				});
				break;
			}
			case 4: {
				setInput((prev) => {
					return {
						w1: prev.w1,
						w2: prev.w2,
						w3: prev.w3,
						w4: prev.w4.length < 5 ? prev.w4 + key : prev.w4,
						w5: prev.w5,
						w6: prev.w6,
					};
				});
				break;
			}
			case 5: {
				setInput((prev) => {
					return {
						w1: prev.w1,
						w2: prev.w2,
						w3: prev.w3,
						w4: prev.w4,
						w5: prev.w5.length < 5 ? prev.w5 + key : prev.w5,
						w6: prev.w6,
					};
				});
				break;
			}
			case 6: {
				setInput((prev) => {
					return {
						w1: prev.w1,
						w2: prev.w2,
						w3: prev.w3,
						w4: prev.w4,
						w5: prev.w5,
						w6: prev.w6.length < 5 ? prev.w6 + key : prev.w6,
					};
				});
				break;
			}
		}
	};

	const deleteLetter = () => {
		switch (currentRef.current) {
			case 1: {
				setInput((prev) => {
					return {
						w1: prev.w1.slice(0, -1),
						w2: prev.w2,
						w3: prev.w3,
						w4: prev.w4,
						w5: prev.w5,
						w6: prev.w6,
					};
				});
				break;
			}
			case 2: {
				setInput((prev) => {
					return {
						w1: prev.w1,
						w2: prev.w2.slice(0, -1),
						w3: prev.w3,
						w4: prev.w4,
						w5: prev.w5,
						w6: prev.w6,
					};
				});
				break;
			}
			case 3: {
				setInput((prev) => {
					return {
						w1: prev.w1,
						w2: prev.w2,
						w3: prev.w3.slice(0, -1),
						w4: prev.w4,
						w5: prev.w5,
						w6: prev.w6,
					};
				});
				break;
			}
			case 4: {
				setInput((prev) => {
					return {
						w1: prev.w1,
						w2: prev.w2,
						w3: prev.w3,
						w4: prev.w4.slice(0, -1),
						w5: prev.w5,
						w6: prev.w6,
					};
				});
				break;
			}
			case 5: {
				setInput((prev) => {
					return {
						w1: prev.w1,
						w2: prev.w2,
						w3: prev.w3,
						w4: prev.w4,
						w5: prev.w5.slice(0, -1),
						w6: prev.w6,
					};
				});
				break;
			}
			case 6: {
				setInput((prev) => {
					return {
						w1: prev.w1,
						w2: prev.w2,
						w3: prev.w3,
						w4: prev.w4,
						w5: prev.w5,
						w6: prev.w6.slice(0, -1),
					};
				});
				break;
			}
		}
	};

	const validateWord = () => {
		const word = inputRef.current[`w${currentRef.current}`];
		const answer = localStorage.getItem('answer');
		let returnArray = [0, 0, 0, 0, 0];
		if (!(test.find((item) => item === word) || words.find((item) => item === word))) return null;
		if (word === localStorage.getItem('answer')) {
			return [1, 1, 1, 1, 1];
		} else {
			if (answer.indexOf(word[0]) !== -1 && answer.indexOf(word[0]) !== 0) returnArray[0] = -1;
			if (answer.indexOf(word[1]) !== -1 && answer.indexOf(word[1]) !== 1) returnArray[1] = -1;
			if (answer.indexOf(word[2]) !== -1 && answer.indexOf(word[2]) !== 2) returnArray[2] = -1;
			if (answer.indexOf(word[3]) !== -1 && answer.indexOf(word[3]) !== 3) returnArray[3] = -1;
			if (answer.indexOf(word[4]) !== -1 && answer.indexOf(word[4]) !== 4) returnArray[4] = -1;
			if (word[0] === answer[0]) returnArray[0] = 1;
			if (word[1] === answer[1]) returnArray[1] = 1;
			if (word[2] === answer[2]) returnArray[2] = 1;
			if (word[3] === answer[3]) returnArray[3] = 1;
			if (word[4] === answer[4]) returnArray[4] = 1;
		}
		return returnArray;
	};

	return (
		<div className='app'>
			<div className='grid'>
				<div className='box w11' ref={refs.w11}>
					{input.w1.split('')[0] ? input.w1.split('')[0].toUpperCase() : ''}
				</div>
				<div className='box w12' ref={refs.w12}>
					{input.w1.split('')[1] ? input.w1.split('')[1].toUpperCase() : ''}
				</div>
				<div className='box w13' ref={refs.w13}>
					{input.w1.split('')[2] ? input.w1.split('')[2].toUpperCase() : ''}
				</div>
				<div className='box w14' ref={refs.w14}>
					{input.w1.split('')[3] ? input.w1.split('')[3].toUpperCase() : ''}
				</div>
				<div className='box w15' ref={refs.w15}>
					{input.w1.split('')[4] ? input.w1.split('')[4].toUpperCase() : ''}
				</div>
				<div className='box w21' ref={refs.w21}>
					{input.w2.split('')[0] ? input.w2.split('')[0].toUpperCase() : ''}
				</div>
				<div className='box w22' ref={refs.w22}>
					{input.w2.split('')[1] ? input.w2.split('')[1].toUpperCase() : ''}
				</div>
				<div className='box w23' ref={refs.w23}>
					{input.w2.split('')[2] ? input.w2.split('')[2].toUpperCase() : ''}
				</div>
				<div className='box w24' ref={refs.w24}>
					{input.w2.split('')[3] ? input.w2.split('')[3].toUpperCase() : ''}
				</div>
				<div className='box w25' ref={refs.w25}>
					{input.w2.split('')[4] ? input.w2.split('')[4].toUpperCase() : ''}
				</div>
				<div className='box w31' ref={refs.w31}>
					{input.w3.split('')[0] ? input.w3.split('')[0].toUpperCase() : ''}
				</div>
				<div className='box w32' ref={refs.w32}>
					{input.w3.split('')[1] ? input.w3.split('')[1].toUpperCase() : ''}
				</div>
				<div className='box w33' ref={refs.w33}>
					{input.w3.split('')[2] ? input.w3.split('')[2].toUpperCase() : ''}
				</div>
				<div className='box w34' ref={refs.w34}>
					{input.w3.split('')[3] ? input.w3.split('')[3].toUpperCase() : ''}
				</div>
				<div className='box w35' ref={refs.w35}>
					{input.w3.split('')[4] ? input.w3.split('')[4].toUpperCase() : ''}
				</div>
				<div className='box w41' ref={refs.w41}>
					{input.w4.split('')[0] ? input.w4.split('')[0].toUpperCase() : ''}
				</div>
				<div className='box w42' ref={refs.w42}>
					{input.w4.split('')[1] ? input.w4.split('')[1].toUpperCase() : ''}
				</div>
				<div className='box w43' ref={refs.w43}>
					{input.w4.split('')[2] ? input.w4.split('')[2].toUpperCase() : ''}
				</div>
				<div className='box w44' ref={refs.w44}>
					{input.w4.split('')[3] ? input.w4.split('')[3].toUpperCase() : ''}
				</div>
				<div className='box w45' ref={refs.w45}>
					{input.w4.split('')[4] ? input.w4.split('')[4].toUpperCase() : ''}
				</div>
				<div className='box w51' ref={refs.w51}>
					{input.w5.split('')[0] ? input.w5.split('')[0].toUpperCase() : ''}
				</div>
				<div className='box w52' ref={refs.w52}>
					{input.w5.split('')[1] ? input.w5.split('')[1].toUpperCase() : ''}
				</div>
				<div className='box w53' ref={refs.w53}>
					{input.w5.split('')[2] ? input.w5.split('')[2].toUpperCase() : ''}
				</div>
				<div className='box w54' ref={refs.w54}>
					{input.w5.split('')[3] ? input.w5.split('')[3].toUpperCase() : ''}
				</div>
				<div className='box w55' ref={refs.w55}>
					{input.w5.split('')[4] ? input.w5.split('')[4].toUpperCase() : ''}
				</div>
				<div className='box w61' ref={refs.w61}>
					{input.w6.split('')[0] ? input.w6.split('')[0].toUpperCase() : ''}
				</div>
				<div className='box w62' ref={refs.w62}>
					{input.w6.split('')[1] ? input.w6.split('')[1].toUpperCase() : ''}
				</div>
				<div className='box w63' ref={refs.w63}>
					{input.w6.split('')[2] ? input.w6.split('')[2].toUpperCase() : ''}
				</div>
				<div className='box w64' ref={refs.w64}>
					{input.w6.split('')[3] ? input.w6.split('')[3].toUpperCase() : ''}
				</div>
				<div className='box w65' ref={refs.w65}>
					{input.w6.split('')[4] ? input.w6.split('')[4].toUpperCase() : ''}
				</div>
			</div>
		</div>
	);
}

export default App;
