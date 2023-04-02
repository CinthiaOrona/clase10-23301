export default function Card({ data }) {
    //console.log(data)

    const lista = data.map((item, index) => <li key={index}>{item}</li>);
    return (
        <span>
            {/* Array behavior delivery types*/}
            {/*data.length > 0 && <span>{data[0]}</span>*/}

            {/*data.length > 0 && data.map((item, index) => <span key={index}> {item} </span>)*/}

            {/*data.length > 0 && data.map((item, index) => <li key={index}>{item}</li>)*/}
            
            {/*data.length > 0 && data.map((item, index) => <li key={index}>{item}</li>)*/}

            {data.length > 0 && <ul id="lista">{lista}</ul>}
         
        </span>
    );
}