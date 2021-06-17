import React,{useState} from 'react'

export default function AddPlayer(props) {
    
    return (
        <div className="add-player-form">
            <form>
                <input type="text" value={props.playerName}  onChange={(e)=>{props.setPlayerName(e.target.value)}} /><input type="button" className="submit-btn" defaultValue="Add Player" onClick={()=>{props.addPlayer()}} />
            </form>
        </div>

    )
}
