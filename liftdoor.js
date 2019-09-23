/**
 * Lift door open & close handler
 */

liftdoorwarper.addEventListener("click", () => {
    let liftdoorstatusclosed = document.querySelector(".liftdoorclosed");
    let liftdoorstatusopen = document.querySelector(".liftdooropen");
    let liftdoorwarper =  document.querySelector("#liftdoorwarper");

    let upperliftdoorleft = document.querySelector("#upperliftdoorleft");
    let lowerliftdoorright = document.querySelector("#lowerliftdoorright");

    if(liftdoorstatusclosed != null){
      liftdoorwarper.classList.remove(liftdoorstatusclosed.className);
      liftdoorwarper.classList.add("liftdooropen");
      upperliftdoorleft.style.transform = 'translateX(-100%)';
      lowerliftdoorright.style.transform = 'translateX(-195%)';
      
    }

    if(liftdoorstatusopen != null){
        liftdoorwarper.classList.remove(liftdoorstatusopen.className);
        liftdoorwarper.classList.add("liftdoorclosed");
        upperliftdoorleft.style.transform = 'translateX(0)';
        lowerliftdoorright.style.transform = 'translateX(0)';
        
      }
})

