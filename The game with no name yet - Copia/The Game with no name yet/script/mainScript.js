
    $(function(){
        class ItemMapa{
            positionX;
            positionY;
            name;
            type;
            isOcuped;
            imgSrc;
            borderColor;
            constructor(px, py, n, t){
                this.positionX = px;
                this.positionY = py;
                this.name = n;
                this.type = t;
                switch(t){
                    case "camp":
                        this.imgSrc = "./The game with no name yet - Copia/images/tent1.png"
                        this.isOcuped = true;
                        break;
                    case "grass":
                        this.imgSrc = "./The game with no name yet - Copia/images/Design sem nome.png"
                        this.isOcuped = false;
                        break;
                    case "rocks":
                        this.imgSrc = "./The game with no name yet - Copia/images/Rocks1.png"
                        this.isOcuped = true;
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
        
        function createMap(map){
            var mapT = []
            for(iy = 1; iy <= 5; iy++){
                for(ix = 1; ix <= 5; ix++){
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
        img1 = document.getElementById("img-title-1")
        btnTest = document.getElementById("btn-test")
        var tableMap1 = createMap(map1)
        var mapTIndex = 0
        for(i=1;i<=5;i++){
            for(ii=1;ii<=5;ii++){
                $("#th-"+i+"-"+ii).children("img").attr({
                    src: tableMap1[mapTIndex].imgSrc,
                    width: "100px"
                })
                $("#th-"+i+"-"+ii).css({
                    border : "2px solid "+tableMap1[mapTIndex].borderColor
                })
                //alert(tableMap1[mapTIndex].type+" added i="+i+" ii="+ii+" mapTindex="+mapTIndex)
                mapTIndex++
            }
        }
    });


