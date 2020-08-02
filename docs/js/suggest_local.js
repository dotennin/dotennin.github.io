function sc_searchBox(partsname){
	var partsname = (typeof rsuggest.isSuggestUse == "function" && rsuggest.isSuggestUse())? "suggest" :"search";
	if(searchSubmit()){
		s_partsCounter(partsname);
		return true;
	} else{
		return false;
	}
}