
    $(function(){

        class Game{
            currentPlayer;
            players = [];

            constructor(listPlayers, startingPlayer){
                
                for(let i=0; i > listPlayers?.length; i++){
                    if(listPlayers[i] == startingPlayer){
                        this.currentPlayer = listPlayers[i]
                    }
                }
                if(this.currentPlayer == null){
                    this.currentPlayer = listPlayers[0]
                }
                this.players = listPlayers
            }

            NextPlayer(){
                //var player
                console.log("NextPlayer()")
                var j = 0
                for(; ; ){
                    if(j > this.players?.length) break;
                    console.log(j)
                    
                    if(this.currentPlayer == this.players[j]){
                        if(j == this.players.length){
                            this.currentPlayer = this.players[0]
                            console.log(this.currentPlayer?.name)
                            return this.currentPlayer;
                            break;
                        }
                        this.currentPlayer = this.players[(j+1)]
                        console.log(this.currentPlayer?.name)
                        return this.currentPlayer;
                        break;
                    }
                    console.log(j)
                    j++;
                }
                console.log("Player not found")
                console.log(this.currentPlayer?.name)
                
            }
        }

        class ItemMapa{
            positionX;
            positionY;
            name;
            type;
            isOcuped;
            imgSrc;
            borderColor;
            description;
            actions;
            constructor(px, py, n, t){
                this.positionX = px;
                this.positionY = py;
                this.name = n;
                this.type = t;
                switch(t){
                    case "camp":
                        this.imgSrc = "./The game with no name yet - Copia/images/tent1.png"
                        this.isOcuped = true;
                        this.description = "A camp is where you can spawn your characters and heal them. But take care, if someone destroy it you'll loose!"
                        break;
                    case "grass":
                        this.imgSrc = "./The game with no name yet - Copia/images/Design sem nome.png"
                        this.isOcuped = false;
                        this.description = "It is just grass"
                        break;
                    case "rocks":
                        this.imgSrc = "./The game with no name yet - Copia/images/Rocks1.png"
                        this.isOcuped = true;
                        this.description = "You can't move your characters thorough a rock (there are some exceptions :))"
                        break;
                    default:
                        this.imgSrc = "./The game with no name yet - Copia/images/Design sem nome.png"
                        this.isOcuped = false;
                }
                switch(n){
                    case "Red":
                        this.borderColor = "red";
                        break;
                    case "Green":
                        this.borderColor = "green";
                        break;
                    case "Blue":
                        this.borderColor = "blue";
                    break;
                    default:
                        this.borderColor="black";
                }
            }
        }

        //W.I.P. I don't know how to do it :)
        class Camp extends ItemMapa{
            
        }

        class Character{
            hp;
            dp;
            speed;
            armor;
            imgSrc;
            intelligence;
            strenght;
            name;
            positionX;
            positionY;
            id;
            type;
            description;
            active = false

            constructor(n, iD, descrpt, t){
                this.id = iD
                this.name = n
                this.description = descrpt
                this.type = t
                this.active = false
                switch(t){
                    case "viking":
                        this.imgSrc = "./The game with no name yet - Copia/Character/viking-helmet.png"
                        break;
                    case "soldier":
                        this.imgSrc = "./The game with no name yet - Copia/Character/knight.png"
                        break;
                    default:
                        this.imgSrc = "./The game with no name yet - Copia/Character/user.png"
                        break;

                }
            }
            Move(){

            }
            Spawn(){
                console.log(this.active)
                player = currentGame.currentPlayer
                if(!this.active){
                    console.log(this.active)
                    this.positionX = player.camp.positionX
                    this.positionY = player.camp.positionY

                    position = this.positionY+", "+this.positionX
                    camp = $("th[position="+position+"]")

                    camp.children("img").attr({
                        src: this.imgSrc,
                        //Soon the width will be diferent for each type of character
                        width: "50px"
                    })
                }
                console.log(this.active)
            }
        }

        class Player{
            camp;
            characters = [];
            weapons;
            name;


            constructor(n, campName, mapList){
                for(let d=0; d <= mapList.length; d++){
                    if(typeof(mapList[d])== typeof(ItemMapa)){
                        if(mapList[d]?.type == "camp" && mapList[d]?.name == campName){
                            this.camp = mapList[d]
                        }
                    }
                }
                this.name = n;

            }
            //Needs to recieve a Character as parameter
            AddCharacter(c){
                this.characters.push(c)
            }
        }

        class Weapon{
            name;
            imgSrc;

        }


        function createCamp(px, py, n){
            const c = new ItemMapa(px, py, n, "camp");
            return c; 
        }
        function createItemMapa(px,py,type,name){
            c = new ItemMapa(px,py,name,type)
            return c;
        }
        var map1 = [createCamp(1, 1, "Red"),createCamp(5, 5, "Blue")
        ,createItemMapa(3,3,"camp","Green")]
        map1.push(createItemMapa(2,3,"rocks","Montanha de pedras"))
        
        function createMap(map, size){
            var mapT = []
            for(iy = 1; iy <= size; iy++){
                for(ix = 1; ix <= size; ix++){
                    var itemPut = false
                    for(l = 0; l < map.length; l++){                       
                        if(map[l].positionY == iy && map[l].positionX == ix){
                            mapT.push(map[l])
                            //alert("camp added at: "+mapT.length)
                            itemPut =true
                        }
                    }
                    if(!itemPut){
                        const g = new ItemMapa(ix, iy, 'grass', "grass", false)
                        mapT.push(g)
                    }
                }
            }
            return mapT;
        }

        function HideShow(elementRef){
            element = $(elementRef)
            
            if(element.css("display") == "none"){
                element.fadeIn()
            }else{
                element.fadeOut()
            }
        }

        function loadCharacters(player){
            list = player.characters
            if(list.length != 0){
                for(i = 0; i< list.length; i++){
                    //cId = list[i].id
                    $(".div-character.clone-model:first").clone().prependTo("#div-characters")
                    $(".div-character.clone-model:eq(1)").attr({
                        class: "div-character",
                        id: list[i]?.id
                    })
                    $("#"+list[i]?.id).css({
                        display: "inline-block"
                    })
                    //alert(list[i].name)
                    $("#"+list[i]?.id).children("h3").text(list[i]?.name)
                    $("#"+list[i]?.id).children("img").attr({
                        src: list[i]?.imgSrc,
                        width: "40px"
                    })
                }
            }
        }
        viking1 = new Character("Viking",1, 
        "A brutal warrior from the ice lands.", "viking")
        soldier1 = new Character("Soldier", 2, 
        "A comon soldier of the royal army.", "soldier")
        playerTest = new Player("Test","Blue",map1)
        playerTest.AddCharacter(viking1)
        playerTest.AddCharacter(soldier1)
        playerTest.AddCharacter(new Character("Archer", 3, "Discreet warrior", "archer"))
        playerTest.AddCharacter(new Character("Golem", 4, "Giant warrior", "golem"))
        playerTest2 = new Player("Test2","green",map1)
        playerTest3 = new Player("Test3","red",map1)
        
        var list1 = [playerTest,playerTest2]

        game1 = new Game(list1, playerTest)

        img1 = document.getElementById("img-title-1")
        var tableMap1 = createMap(map1, 5)
        function CreateTableMap(tableMap, size){
            var mapTIndex = 0
            for(i=1;i<=size;i++){
                for(ii=1;ii<=size;ii++){
                    
                    $("#th-"+i+"-"+ii).attr({
                        class: "th-map-item ",
                        mapID: mapTIndex,
                        position: i+", "+ii
                    })
                    $("#th-"+i+"-"+ii).css({
                        border : "3px solid "+tableMap[mapTIndex].borderColor,
                        backgroundImage: "url('../../."+tableMap[mapTIndex].imgSrc+"')",
                        width: "100px",
                        height: "100px"
                    })
                    //alert(tableMap1[mapTIndex].type+" added i="+i+" ii="+ii+" mapTindex="+mapTIndex)
                    mapTIndex++
                }
            }
        }
        CreateTableMap(tableMap1, 5)
        //th of map-items - hover
        $(".th-map-item").on("mouseover", function(){
            $(this).css({
                borderWidth: "5px",
                width: "96px",
                height: "96px"
            })
        })
        $(".th-map-item").on("mouseleave", function(){
            $(".th-map-item").css({
                borderWidth: "3px",
                width: "100px",
                height: "100px"
            })
        })
        // - 
        $(".th-map-item").on("click", function(){
            $("#actions-title").css({
                display: "block"
            })
            mapId = $(this).attr("mapID")
            for(i=0; i<=tableMap1.length;i++){
                if(mapId == i){
                    $("#item-title").text(tableMap1[i].name)
                    $("#item-description").text(tableMap1[i].description)
                    $("#item-title").css({
                        border: "3px solid "+tableMap1[i].borderColor
                    })
                    $("#item-position").text("Position: "+tableMap1[i].positionY
                    +", "+tableMap1[i].positionX)
                }
            }
        })



        currentGame = game1

        $("#btn-change-player").on("click", function(){
            //alert(currentGame.currentPlayer?.name)
            //currentGame.NextPlayer()
            //alert(currentGame.currentPlayer?.name)
            currentGame.currentPlayer = currentGame.NextPlayer();
            $(".div-character").remove()

            
        })

        loadCharacters(currentGame.currentPlayer)

        $("#div-players").children("h2").text(currentGame.currentPlayer?.name)

        $(".div-character").on("click", function(){
            $("#actions-title").css({
                display: "block"
            })
            cId = $(this).attr("id")
            list = currentGame.currentPlayer.characters
            for(i = 0; i<=list.length; i++){
                if(list[i]?.id == cId){
                    $("#item-title").text(list[i]?.name)
                    $("#item-description").text(list[i]?.description)
                    if(list[i]?.active){
                        $("#item-position").text("Position: "+list[i]?.positionY
                    +", "+list[i]?.positionX)
                    } else{
                        $("#item-position").text("")
                    }
                    $("#btn-spawn-test").on("click",function(){
                        list[i]?.Spawn()
                        console.log(list[i]?.active)
                    })
                }
            }
        })
    });



