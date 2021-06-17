import React,{useState,useEffect} from 'react';

export default function Player(props) {
    
    const [player, setPlayer] = useState(props.data)
    const {data,index} = props;
    console.log("datat",data)

    useEffect(() => {
        setPlayer(props.data)        
    }, [props.data])
    return (
        <div className='player'>
            <div className='player-name'>
                <button className='remove-player'>X </button>
                {player.name}
            </div>
            <div className='player-score'>
                <div className='counter'>
                    <button className='counter-action decrement' onClick={()=>{props.onScoreChange(index,-1)}}>-</button>
                    <div className='counter-score'>{player.score}</div>
                    <button className='counter-action increment' onClick={()=>{props.onScoreChange(index,1)}}>+</button>
                </div>
            </div>
        </div>
    );
}
