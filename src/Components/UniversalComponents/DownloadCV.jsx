import pdf from '../../assets/FEROZALI.pdf';
function DownloadCV(){

  return<>
<div>
     
      <a href={pdf} download="doc.pdf">
      <button>Download My CV
        
      </button>
      </a>
    </div>
  </>
}
export default DownloadCV;