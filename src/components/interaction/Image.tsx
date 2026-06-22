type ImageProps = { src: string; size: number; pointPosition: string }

export default function InteractImage({src, size, pointPosition}:ImageProps) {

    let style = size == 2? "col-span-2 row-span-2": "" 
    console.log("style :",style) 
    return (
    <div className={"relative " + style}>
        <div className={"h-16 w-16 bg-black absolute rounded-full hover:bg-gray-900 transition cursor-pointer " + pointPosition}/>
        <img src={src} alt=""  className="h-full w-full "/>
    </div>
  )
}
