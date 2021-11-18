

var object_cases = new Array();



async function mxs_get_cases(count = 100) {
	
	var mxc_item = new Array();
	
	var url = 'https://maxess.se/wp-json/wp/v2/case?per_page='+count;
	
	
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      
      xhr.onload = function(e) {
        resolve(xhr.response);
       
        
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 


     data = JSON.parse(response);
    
      
        //Create data array
		for (i = 0; i < data.length; i++) {
			    
			    //Images
			    var caseimage = {
				    'full' : data[i].acf.topimage.sizes.topimage_cases, 
				    'medium' : data[i].acf.topimage.sizes.large, 
				    'small' : data[i].acf.topimage.sizes.medium,
				    'thumbnail' : data[i].acf.topimage.sizes.thumbnail  
			    }
			    //
			    
			   
			    
			    //Source files
			    var sf = data[i].acf.sourcefiles;
			    var sourcefiles = new Array();
			    
			    for (x = 0; x < sf.length; x++) {
				    
				    var sourcefile = {
				    
					    'id' : sf[x].sourcefile.id,
					    'title' : sf[x].sourcefile.title,
					    'url' : sf[x].sourcefile.url,
					    'filename' : sf[x].sourcefile.filename,
					    'filesize' : sf[x].sourcefile.filesize,
					    'filetype' : sf[x].sourcefile.subtype,
					    'icon' : sf[x].sourcefile.icon,
				    
				    }
				    
				    sourcefiles.push(sourcefile);
		 
			    }
			    //
			    
			    //Blocks
			    var bl = data[i].blocks;
			    var blocks = new Array();
			    
			    for (y = 0; y < bl.length; y++) {
				    
				    var block = {
				    
					    'name' : bl[y].blockName,
					    'content' : bl[y].attrs.content,
					    'url' : bl[y].attrs.url,
					    'innerHTML' : bl[y].innerHTML,
				    
				    }
				    
				    blocks.push(block);
		 
			    }
			    //
			    
			    //Cards
			    var cds = data[i].acf.cards;
			    var cards = new Array();
			    
			    for (z = 0; z < cds.length; z++) {
				    
				    var card = {
				    
					    'id' : cds[z].ID
				    
				    }
				    
				    cards.push(card);
		 
			    }
			    //
			    
			        
			    var object = {
				    'id' : data[i].id, 
				    'card_ids' : cards,
				    'title' : data[i].title.rendered, 
				    'permalink' : data[i].link,
				    'content' :  data[i].content.rendered,
				    'short_desc' :  data[i].acf.short_description,
				    'caseimage' : caseimage,
				    'sourcefiles' : sourcefiles,
				    'blocks' : blocks
			    }
			    
			    mxc_item.push(object); 
			       
		    }
       
        
        //
        
        
       return mxc_item;
       
}



async function mxs_get_case(id) {
	
	var mxc_item = new Array();
	
	var addID = "";
	
	if(id) {
		var addID = "?include[]=" + id;
	}
	
	var url = 'https://maxess.se/wp-json/wp/v2/case/'+addID;
	
	
   let response = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function(e) {
        resolve(xhr.response);
       
        
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send();
   }) 


     data = JSON.parse(response);
    
      
        //Create data array
		for (i = 0; i < data.length; i++) {
			    
			    //Images
			    var caseimage = {
				    'full' : data[i].acf.topimage.sizes.topimage_cases, 
				    'medium' : data[i].acf.topimage.sizes.large, 
				    'small' : data[i].acf.topimage.sizes.medium,
				    'thumbnail' : data[i].acf.topimage.sizes.thumbnail  
			    }
			    //
			    
			   
			    
			    //Source files
			    var sf = data[i].acf.sourcefiles;
			    var sourcefiles = new Array();
			    
			    for (x = 0; x < sf.length; x++) {
				    
				    var sourcefile = {
				    
					    'id' : sf[x].sourcefile.id,
					    'title' : sf[x].sourcefile.title,
					    'url' : sf[x].sourcefile.url,
					    'filename' : sf[x].sourcefile.filename,
					    'filesize' : sf[x].sourcefile.filesize,
					    'filetype' : sf[x].sourcefile.subtype,
					    'icon' : sf[x].sourcefile.icon,
				    
				    }
				    
				    sourcefiles.push(sourcefile);
		 
			    }
			    //
			    
			    //Blocks
			    var bl = data[i].blocks;
			    var blocks = new Array();
			    
			    for (y = 0; y < bl.length; y++) {
				    
				    var block = {
				    
					    'name' : bl[y].blockName,
					    'content' : bl[y].attrs.content,
					    'url' : bl[y].attrs.url,
					    'innerHTML' : bl[y].innerHTML,
				    
				    }
				    
				    blocks.push(block);
		 
			    }
			    //
			    
			    //Cards
			    var cds = data[i].acf.cards;
			    var cards = new Array();
			    
			    for (z = 0; z < cds.length; z++) {
				    
				    var card = {
				    
					    'id' : cds[z].ID
				    
				    }
				    
				    cards.push(card);
		 
			    }
			    //
			        
			    var object = {
				    'id' : data[i].id, 
				    'card_ids' : cards,
				    'title' : data[i].title.rendered, 
				    'permalink' : data[i].link,
				    'content' :  data[i].content.rendered,
				    'short_desc' :  data[i].acf.short_description,
				    'caseimage' : caseimage,
				    'sourcefiles' : sourcefiles,
				    'blocks' : blocks
			    }
			    
			    mxc_item.push(object); 
			       
		    }
       
        
        //
        
        
       return mxc_item;
       
}