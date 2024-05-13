import React,{useState} from 'react'
import StarIcon from '@mui/icons-material/Star';

const ratings = [5, 4, 3, 2, 1];

const Checkbox = ({ value, onChange, checked }) => (
  <div className=' border-b-2 pl-2'>
    <label className="flex items-center space-x-1 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checked:bg-black checked:border-transparent"
      />
       {Array.from({ length: 5 }, (_, index) => (
                  <StarIcon 
                      style={{fontSize:"1em"}}
                      key={index} 
                      // style={{ color: index < Math.round(value) ? 'black' : 'gray' ,fontSize:"1em"}} 
                      className={index < Math.round(value) ? 'text-black dark:text-amber-500 ' : 'text-neutral-400'}
                  />
                  ))}
     
      
    </label>
    </div>
  );

const RatingFilter = ()=>{
    const [selectedRatings, setSelectedRatings] = useState([]);

    const handleCheckboxChange = (value) => {
      if (selectedRatings.includes(value)) {
        setSelectedRatings(selectedRatings.filter((rating) => rating !== value));
      } else {
        setSelectedRatings([...selectedRatings, value]);
      }
    };
    return (
        <div className="flex flex-col space-y-2 ml-4  dark:bg-gray-700 bg-white rounded-t-lg ">
           
        {ratings.map((rating) => (
          <Checkbox className="cursor-pointer "
            key={rating}
            value={rating}
            checked={selectedRatings.includes(rating)}
            onChange={() => handleCheckboxChange(rating)}
          />
        ))}
      </div>
    )
}

export default RatingFilter