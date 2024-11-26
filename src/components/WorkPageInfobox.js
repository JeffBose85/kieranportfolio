const WorkPageInfobox = (props) => {

    const infotitles = props.infotitles;
    const infodata = props.infodata;
    const downloadlink = props.downloadlink;
    const downloadtext = props.downloadtext;

    function downloadClicked() {
        window.open(downloadlink, '_blank');
    }

    return ( 
        <div className="infoboxcontainer">
            {infotitles.map((title) => {
                let index = infotitles.indexOf(title)

                return (
                    <div className="infoboxsection">
                        <div className="infotitle">{title}</div>
                        <div className="infodata">{infodata[index]}</div>
                    </div>
                )
            })}

            <button className="infoboxdownload" onClick={downloadClicked}>{downloadtext}</button>
        </div>
     );
}
 
export default WorkPageInfobox;