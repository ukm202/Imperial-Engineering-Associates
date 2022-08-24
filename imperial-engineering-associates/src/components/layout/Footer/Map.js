const Map = () => {
    return (
        <div className="map">
            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Lalitpur,%20Sri%20Krishna%20Pranami%20Mul%20Mandir,%20Imadol&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <p style={{margin:'0', opacity:'0.6', fontSize:'small'}}>Imadol-01, Mahalaxmi 44600 <br />
            Lalitpur, Nepal <br />
            Tel. :+977-1-2345670 <br />
            example@abc.com.np</p>
        </div>  

    );
}
 
export default Map;