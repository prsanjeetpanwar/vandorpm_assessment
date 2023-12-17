// People.tsx

import React from 'react';
import peopleData from './PeopleData';

interface Person {
  name: string;
  country: string;
}

const People: React.FC = () => {
  return (
    <div>
      <table>
        <thead>
         
        </thead>
        <tbody>
          {peopleData.map((person: Person, index: number) => (
            <tr key={index}>
              <td style={{ width: '300px' }}>
                <div className="person-box">
                  {person.name}
                </div>
              </td>
              <td style={{ width: '140px' }}>
                <div className="person-box">
                  {person.country}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default People;
