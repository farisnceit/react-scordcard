import React from 'react';

export default function Scordcard({totalPlayers}) {
    
    const totalPoints = totalPlayers.reduce(function(total,player){
        return total + player.score ;
      },0)
    return (
        <div className='header'>
            <table className='stats'>
                <tbody>
                    <tr>
                        <td>Players:</td>
                        <td>{totalPlayers.length}</td>
                    </tr>
                    <tr>
                        <td>Total Points:</td>
                        <td>{totalPoints}</td>
                    </tr>
                </tbody>
            </table>
            <h1>ScoreCard</h1>
        </div>
    );
}
