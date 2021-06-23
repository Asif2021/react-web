import React from 'react';
import Card from '../Pages/Card';
import Sdata from './Sdata';
import Heading from '../Components/Heading';

function Services() {
  return (
    <div>
      <div className='my-3'>
        <Heading text={<h3 className='text-center'> Our Services </h3>} />
        <div className='container-fluid mb-3'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                {Sdata.map((val, ind) => {
                  return (
                    <Card key={ind} imgsrc={val.imgsrc} title={val.title}
                     />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
