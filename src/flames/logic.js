function flame(name1, name2) {
	const flames = ['f', 'l', 'a', 'm', 'e', 's'];
	let count = 0;
	
	name1 = name1.trim().toLowerCase();
	name2 = name2.trim().toLowerCase();
	let array1 = name1.split("");
	array1=array1.filter(item=>item!==" ");
	let array2 = name2.split("");
	array2=array2.filter(item=>item!==" ");
	const big = array1.length > array2.length ? array1 : array2;
	const small = array1.length < array2.length ? array1 : array2;
	
	for (let i = 0; i < big.length; i++) {
	  const index = small.indexOf(big[i]);
	  if (index !== -1) {
		big[i] = small[index] = '\0';
	  }
	}
	
	for (let i = 0; i < big.length; i++) {
	  if (big[i] !== '\0') count++;
	}
	for (let j = 0; j < small.length; j++) {
	  if (small[j] !== '\0') count++;
	}
	
	for (let i = 0; i < flames.length - 1; i++) {
	  const nullCount = count % (flames.length - i);
	  flames.splice(nullCount, 1);
	}
	
	return flames[0];
  }
  
  export default flame;
  