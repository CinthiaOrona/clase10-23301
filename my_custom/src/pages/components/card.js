export default function Card({data}) {
    //console.log(data)
    return (
        <span>
        {/* Boolean behavior*/}
            {data.text}
            {data.text2 && <p>{data.text2}</p>}
        </span>
    );
}