const Map = () => {
    return (
        <div className="map">
            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Imperial%20Engineering%20Associates&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <p style={{margin:'0', opacity:'0.6', fontSize:'small'}}>Imadol-01, Mahalaxmi 44600 <br />
            Lalitpur, Nepal <br />
            Tel. :+977 9845095940 <br />
            imprl.np@gmail.com</p>
        </div>  

    );
}
 
export default Map;