export const getDuration = (startTime:string,endTime:string) => {
    //input string as hh:mm:ss
    let s:number[] = startTime.split(":").map((string) => Number(string))
    let e:number[] = endTime.split(":").map((string) =>Number(string))
    s[0]=s[0]*3600
    e[0]=e[0]*3600
    s[1]=s[1]*60
    e[1]=e[1]*60
    
    let startTotal:number = 0 
    let endTotal:number = 0

    s.forEach((seconds)=>startTotal+=seconds)
    e.forEach((seconds)=>endTotal+=seconds)
    
    let duration:number|string = endTotal-startTotal 
    if(duration > 60){
        let minutes = Math.floor(duration/60)
        let seconds = duration - (minutes*60)
        duration = `${minutes}:${seconds}`
    }

    if(typeof duration != "string"){
        return duration + "s" 
    }
    console.log(duration)
    return duration
    
}
