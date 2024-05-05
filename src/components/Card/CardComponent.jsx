import React, {useState} from 'react'
import './card.css';

const obj = {
  "jdUid": "cfff35ba-053c-11ef-83d3-06301d0a7178-92012",
  "jdLink": "https://weekday.works",
  "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
  "maxJdSalary": 103,
  "minJdSalary": 100,
  "salaryCurrencyCode": "USD",
  "location": "mumbai",
  "minExp": null,
  "maxExp": null,
  "jobRole": "ios",
  "companyName": "LG",
  "logoUrl": "https://logo.clearbit.com/lg.com"
}

function CardComponent(props) {
  const renderHeader = () => {
    return (
      <div className='card-header'>
        <div className='card-header-postTime'>{`⏳ Posted ${Math.ceil(Math.random() * 10)} days ago`}</div>
        <div className='card-header-title'>
          <img className='card-header-url' src={props?.logoUrl} alt='companyLogo' />
          <div className='card-header-info'>
            <div className='card-header-info-companyName'>{props?.companyName}</div>
            <div className='card-header-info-jobRole'>{props?.jobRole}</div>
            <div className='card-header-info-location'>{props?.location}</div>
          </div>
        </div>
      </div>
    )
  }
  const renderBody = () => {
    const TruncatedText = ( text, maxLength ) => {
      const [expanded, setExpanded] = useState(false);

      const toggleExpand = () => {
        setExpanded(!expanded);
      };

      return (
        <div>
          {expanded ? (
            <div>{text}</div>
          ) : (
            <div>
              {text.length > maxLength ? (
                <React.Fragment>
                  {text.slice(0, maxLength)}...
                  <button onClick={toggleExpand}>View more</button>
                </React.Fragment>
              ) : (
                <div>{text}</div>
              )}
            </div>
          )}
        </div>
      );
    };
    return (
      <div className='card-body'>
        {(props?.minJdSalary || props?.maxJdSalary) ? <div className='card-body-salaryInfo'>{`Estimated Salary: ₹ ${props?.minJdSalary} - ${props?.maxJdSalary} LPA  ✅`}</div> : null}
        <div className='card-body-title'>About Company:</div>
        <div className='card-body-subtitle'>About Us</div>
        <div className='card-body-description'>{TruncatedText(props?.jobDetailsFromCompany, 500 )}</div>
        {props?.minExp && <div className='card-body-minimumExperience-title'>Minimum Experience</div>}
        {props?.minExp && <div className='card-body-minimumExperience-value'>{`${props?.minExp} years`}</div>}
      </div>
    )
  }
  const renderFooter = () => {
    return (
      <div className='card-footer'>
        <div className='card-footer-action' role='button'>⚡ Easy Apply</div>
      </div>
    )
  }
  return (
    <div className='card'>
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </div>
  )
}

export default CardComponent