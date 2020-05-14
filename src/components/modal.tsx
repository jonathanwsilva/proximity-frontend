import React, {useState} from 'react';

type Props = {
    onSubmit: ({what, where}: {what: string, where: string}) => void;
}

export default (props: Props) => {
    const [what, setWhat] = useState('');
    const [where, setWhere] = useState('');

    return (
        <div>
            <p>
                I should be a modal!
            </p>

            <form onSubmit={(e) => {
                e.preventDefault()
                props.onSubmit({what, where})
            }}>
                <div>
                    <label htmlFor="what-input" >what</label>
                    <input 
                        id="what-input" 
                        type="text" 
                        placeholder="Job you are looking for" 
                        value={what} 
                        onChange={e => setWhat(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="where-input" >where</label>
                    <input 
                        id="where-input" 
                        type="text" 
                        placeholder="Town you are commuting from" 
                        value={where}
                        onChange={e => setWhere(e.target.value)}
                    />
                </div>

                <input type="submit" value="Search!" />
            </form>
        </div>
    )
}