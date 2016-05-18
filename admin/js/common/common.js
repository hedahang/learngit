//公用函数
/*给数组扩展一些私有方法
	1)unqie 方法用于数组去重
	2)indexOfString  用于判断数组是否包含字符串
*/
Array.prototype.unqie=function(){
	var a=[];
	var n=[];
	for(var i=0; i<this.length; i++;){
		if(!n[this[i]]){
			n[this[i]]=true;
			a.push(this[i]);
		}
	}
	return a;
}

Array.prototype.indexOfString(str){
	var boolem=false;
	if(str==null){
		boolem=false;
	}
	for(var i=0; i<this.length; i++){
		if(this[i].indexOf(str)!=-1){
			boolem=true;
		}
	}
	return boolem; 
}
