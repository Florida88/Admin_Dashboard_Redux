
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ObjectData, updateObject } from '../redux/actions';
import classes from './Card.module.css';

import { useParams, useNavigate } from 'react-router-dom';
interface RootState {
    objects: ObjectData[];
}

export default function EditPage() {
    const navigate = useNavigate();

    const { id } = useParams();

    const objects = useSelector((state: RootState) => state.objects);

    const [type, setType] = useState<any>(objects[Number(id) - 1].type);
    const [group, setGroup] = useState<any>(objects[Number(id) - 1].group);
    const [description, setDescription] = useState<any>(objects[Number(id) - 1].description);
    const [summary, setSummary] = useState<any>(objects[Number(id) - 1].summary);
    const [width, setWidth] = useState<any>(objects[Number(id) - 1].width);
    const [height, setHeight] = useState<any>(objects[Number(id) - 1].height);
    const [rate, setRate] = useState<any>(objects[Number(id) - 1].rate);

    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const updatedObject: ObjectData = {
            id: String(id),
            enabled: objects[Number(id) - 1].enabled,
            type: type,
            width: width,
            height: height,
            unit: objects[Number(id) - 1].unit,
            rate: rate,
            matchSize: objects[Number(id) - 1].matchSize,
            group: group,
            description: description,
            summary: summary,
            order: objects[Number(id) - 1].order,
        };

        dispatch(updateObject(updatedObject));

        navigate('/');
    };

    const showModal = () => {
        setModal(!modal);
    }


    return (
        <div className={classes.wrapper2}>
            {objects.map((item) =>
                item.id === id ? (
                    <form key={id} onSubmit={handleSubmit}>
                        <div className={`${modal ? classes.modal : classes.none} `}>
                            <div className={classes.modalContent}>
                                <h2>Are you sure you want to save?</h2>
                                <button type='submit' className={classes.btn}>Yes,save</button>
                                <button type='button' onClick={showModal} className={classes.btnCancel}>Cancel</button>
                            </div>
                        </div>
                        <label htmlFor="type">Type</label>
                        <input
                            className={classes.input}
                            type="text"
                            id="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />

                        <label htmlFor="group">Group</label>
                        <input
                            className={classes.input}
                            type="text"
                            id="group"
                            value={group}
                            onChange={(e) => setGroup(e.target.value)}
                        />

                        <label htmlFor="description">Description</label>
                        <input
                            className={classes.input}
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <label htmlFor="summary">Summary</label>
                        <input
                            className={classes.input}
                            type="text"
                            id="summary"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                        />

                        <label htmlFor="width">Width</label>
                        <input
                            className={classes.input}
                            type="number"
                            id="width"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                        />

                        <label htmlFor="height">Height</label>
                        <input
                            className={classes.input}
                            type="number"
                            id="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />

                        <label htmlFor="rate">Rate</label>
                        <input
                            className={classes.input}
                            type="number"
                            id="rate"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                        />

                        <button type="button" onClick={showModal} className={classes.btn}>
                            Save
                        </button>
                        <button type="button" onClick={() => { navigate('/') }} className={classes.btnExit}>
                            Exit
                        </button>
                    </form>
                ) : null
            )}
        </div>
    );
}