
let useScroll=()=>{
    function handleScroll(){
        let scrollTop = window.scrollY;

        let docHeader=document.getElementById('single-post__header')
        let docBody=document.getElementById('single-post__body')
        function docHeightx(){
            if(docBody){
            
                return docHeader.offsetHeight + docBody.offsetHeight
            }else{
               
                return 0
            }
        }
        let docHeight=docHeightx()
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        docBody? document.getElementById("scrollbar").style.background =`
        linear-gradient(to right, var(--text-color) ${scrollPercentRounded}%, var(--back-color) ${scrollPercentRounded}%)`:''
    }
    return {handleScroll}
}

export default useScroll;