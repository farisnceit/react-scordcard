import React, { useState, useEffect } from 'react';
import Scordcard from './components/scordcard';
import Player from './components/player';
import AddPlayer from './components/addPlayer';

var PLAYERS = [
    {
        name: 'Rohit Sharma',
        score: 124,
        id: 1,
    },
    {
        name: 'virat kohli',
        score: 94,
        id: 2,
    },
];

var test_API = "testapi"

var nextId = 3;

function App() {
    const [playerList, setPlayerList] = useState([]);
    const [playerName, setPlayerName] = useState('')
    const [name,setName] = useState({nanme: ""})

    useEffect(() => {        
        setPlayerList(PLAYERS);
    }, []);

    const onScoreChange = (index, score) => {
        if(playerList[index].score == 0 && score == -1) return
      
        const tempPlayerList = [...playerList];
        
        tempPlayerList[index].score += score;
        setPlayerList(tempPlayerList);
    }
    
    
    function addPlayer(){
      
      const newPlayer = {
        id : nextId,
        name: playerName,
        score : 0
      }

      playerList.push(newPlayer)
      setPlayerList(playerList)
      nextId++

      setPlayerName('')


    }

    
    
    return (
        <div className='scoreboard'>
            <Scordcard totalPlayers={playerList} />
            <div className='players' >
                {playerList.length >0
                    ? playerList.map((player, index) => {
                          return (
                              <Player
                                  key={player.id}
                                  index={index}
                                  data={player}
                                  onScoreChange={onScoreChange}
                              />
                          );
                      })
                    : 'No Player found'}
            </div>
            <AddPlayer playerName={playerName} setPlayerName={setPlayerName}  addPlayer={addPlayer} />
        </div>
    );
}

export default App;
