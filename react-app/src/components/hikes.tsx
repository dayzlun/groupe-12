import * as React from 'react';
import {Hike} from '../models/hike';
import {useAppState} from '../app';
import {loadHikesFromApi} from '../effects/hikeEffects';

type HikeRowProps = {
  hike: Hike;
};

type HikeTableProps = {
  hikes: Hike[];
};

const NoHikes: React.FC = () => <span>There are no hikes yet...</span>;

const HikeRow: React.FC<HikeRowProps> = props => (
  <tr>
    <td>{props.hike.name}</td>
  </tr>
);

const HikeTable: React.FC<HikeTableProps> = props => (
  <table className="hikes-table">
    <thead>
      <tr>
        <td>Name</td>
      </tr>
    </thead>
    <tbody>
      {props.hikes.map((hike, idx) => (
        <HikeRow hike={hike} key={idx} />
      ))}
    </tbody>
  </table>
);

export const Hikes: React.FC = () => {
  const [state, dispatch] = useAppState();
  const {hikes} = state;

  return (
    <div className="hikes">
      <h1>Your hikes <button onClick={() => loadHikesFromApi(dispatch)}>Refresh</button></h1>
      {hikes.length > 0 ? <HikeTable hikes={hikes} /> : <NoHikes />}
    </div>
  );
};
