{

  var duration=document.getElementById("#time");

  // QUEUE ADDED //

     $('.addtoqueue').click(function(){

          $('#aside').css({

             width:'20%',

          })
          $('#main').css({

            width:'80%'
          })
    $('.artistsimage').css({

      width:'140px',
      height:'140px',
      marginRight:'18px'

    })
    $('.hovers4').css({
       
      width:'140px',
      height:'140px',
      marginRight:'18px'

    })
   $('.songimage2').css({

      width:'133px',
      height:'135px'
   })
   $('.hovers').css({

    width:'133px',
    height:'135px'
 })
   $('.song2').css({

     height:'170px'
   })
   $('.songimage4').css({
  
    width:'130px', 
    height:'120px'
   })
   
   $('.latestenglish').css({
  
    marginBottom:'20px'
   })

   $('#headerimage').css({
    
      width:'83%',
      marginLeft:'7.5%'

   })
   $('.himage').css({
    
     width:'100%'
     

    })
    
 })

   
        // queue closed

        $('.queuecloser').click(function(){
          
          $('#aside').css({
  
            width:'0%'
  
         })
         $('#main').css({
  
           width:'100%'
         })
         $('.artistsimage').css({
  
            width:'150px',
            height:'150px',
            marginRight:'0px'
            
  
          })
          $('.hovers4').css({
       
            width:'150px',
            height:'150px',
            marginRight:'0px'
      
          })
           $('.songimage2').css({
  
            width:'172px',
            height:'170px'
           })
           $('.hovers').css({

            width:'172px',
            height:'170px'
         })
            $('.song2').css({
  
             height:'180px'
          }) 
          $('.songimage4').css({
  
          width:'170px', 
          height:'120px'
         })
  
         $('.latestenglish').css({
  
            marginBottom:'20px'
         })
  
         $('#headerimage').css({
   
            width:'100%',
            marginLeft:'0px'
          
  
         })
         $('.himage').css({
   
            width:'100%'
    
  
          })
  
        })




       let n=0;
      var darkmode= function(){
        n++;
         if(n==1){
                 
            // LIGHT MODE //  
          
             $('#head').css({
               backgroundColor:'white',
               color:'black'
             })
             $('h3').css({
                 color:'black'
             })

             $('#navbar').css({
               backgroundColor:'white'
             })
              
             $('#darkmode').css({
               opacity:'1',
               fontSize:'1.2rem'
             })
             $('#lightmode').css({
              opacity:'0',
              fontSize:'0rem',
              top:"-14px"
            })
            $('#sidericon').css({
             
              color:'black'
          })
          $('#title').css({
             
            color:'black'
          })
          $('#advertisement').css({
             
              backgroundColor:'rgb(243,244,246)',
              color:'black'
            
          })
          
           $('#icons').css({
             
            borderColor:'black'
          })
          $('#icons2').css({
             
            borderColor:'black'
          })
          
          $('#userimage').css({
             
            opacity:'0'
          })
          $('#userimage2').css({
             
            opacity:'1'
          })
          
          $('#icons3').css({
             
            borderColor:'black'
          })
           
          $('#offcanvasNavbar button').css({

            color:'black',
            
         })
         $('#adpara').css({
          color:'black'
          
        })
         $('#musicbar').css({
             
            backgroundColor:'white'
        })
          $('#offcanvasNavbar').css({

             color:'black',
             backgroundColor:'white'
          })

            $('#searchinput').css({
               
                backgroundColor:'white',
                color:'black'
            })
            
            $('#searchbar').css({
               
              backgroundColor:'white',
              
          })
             
         }else{ 

          // DARK MODE //

            $('#head').css({
              backgroundColor:'rgb(12,15,18)',
              color:'white'
            })
            $('h3').css({
              color:'white'
            })
            $('#navbar').css({
              backgroundColor:'transparent'
            })
            $('#musicbar').css({
             
              backgroundColor:'rgb(34,36,40)'
          })
          $('#userimage').css({
             
            opacity:'1'
          })
          $('#userimage2').css({
             
            opacity:'0'
          })
            $('#darkmode').css({
              opacity:'0',
              fontSize:'0rem'
            })
          
           $('#advertisement').css({
             
              backgroundColor:'rgb(33,37,45)',
              
            
          })
          $('#adpara').css({
            color:'white'
            
          })

            $('#lightmode').css({
              opacity:'1',
              fontSize:'1.2rem',
              left:'90px'
            })
            $('#offcanvasNavbar').css({

              color:'white',
              backgroundColor:'rgb(12,15,18)'
           })

           $('#offcanvasNavbar button').css({

            color:'white',
            
         })
            $('#icons').css({
             
              boderColor:'white'
           })
           $('#icons2').css({
             
            boderColor:'white'
           })
            $('#icons3').css({
             
             boderColor:'white'
           })
            
            $('#searchinput').css({
               
              backgroundColor:'rgb(12,15,18)'
          })
          $('#sidericon').css({
             
            color:'white'
        })
        $('#title').css({
             
          color:'white'
        })
          $('#searchbar').css({
             
            backgroundColor:'rgb(12,15,18)',
            color:'white'
        })
             n=0;
        }
 
       }

      let playbutton2 = $('.playbutton2');

      playbutton2.click(function(){
        $('#musicbar').css({
          opacity:'1'
      })

      })

      $('.hovers3').click(function(){
         $('#musicbar').css({
           opacity:'1'
         })
         
      })
     

      let  playingSong=false;
   
       let track=document.createElement('audio');
                   
        track.src="./home-images/Jon_bellion-all_time_low.mp3";
        track.load();

                 
      
      

      var onPlay=function(){
            
             if(playingSong==false){

                 playsong();
             }else{

                 pausesong();
             }
             
      }
       
     var playsong =  function(){
            
             track.play();  
             playingSong==true;
             $('#play').css({
                       fontSize:'0rem',
                        opacity:'0'
                     })
                     $('#pause').css({

                        fontSize:'1rem',
                        opacity:'1'
                      })  

               


           
        } 
     var pausesong =  function(){

          track.pause();  
          playingSong==false;
          $('#pause').css({

                   fontSize:'0',
                     opacity:'0'
                   })
          
                   $('#play').css({
                    fontSize:'1rem',
                     opacity:'1'
                  })          
        }

     var volume_change=function(){
         
       recentVolume= document.querySelector(".recent_volume").value;
       track.volume=recentVolume/100;

     }   

     var change_duration=function(){

          slider=document.querySelector("#duration_slider");
          show_duration=document.querySelector("#show_duration")
          var sliderPosition=track.duration * (slider.value / 100);
          track.currentTime= sliderPosition;

     }

     var  range_slider=function(){

            let position=0;

            if(!isNaN(track.duration)){
              position=track.currentTime * (100 / track.duration);
              slider.value=position;
       
            }
     }
     setInterval(range_slider,1000);

         
      var i=0;
     $("#volumeButton").click(function(){
            i++;
        if(i==1){
           
          $('#volume').css({

              
            opacity:'1'
          
            });
             
        }else{

          $('#volume').css({

              
            opacity:'0'
          
            }); 
            i=0;
        }
          
     })


    // video ///
    
   


}   
 
        

