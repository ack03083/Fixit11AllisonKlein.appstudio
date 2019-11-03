let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]


favFoods.onshow=function(){
  for (i = 0; i < goodFoods.length; i++) {
    lstFoods.addItem(goodFoods[i])
    }
}

lstFoods.onclick=function(choice){
if (typeof(choice) == "object") {
return
} else {
NSB.MsgBox("You picked " + goodFoods[choice] + " - " + " thats a great choice!")
}
}



btnDessert.onclick=function(){
  ChangeForm(dessertVoting)
}

  
}


  
}
