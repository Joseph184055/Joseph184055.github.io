const $ = function(selector, node=document) {
	return node.querySelector(selector);
}

class System {
 	OUT = $('#output');
	IN = $('#input');
}

System.OUT.textContent = 'Hello lol';
