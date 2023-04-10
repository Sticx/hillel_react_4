import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import { v4 as uuidv4 } from 'uuid';
import KartisComponent from './components/KartisComponent/KartisComponent';
import TitleComponent from './components/TitleComponent/TitleComponent';


const Api = ({ stateCategories: { Peoples, Planets, Starships } }) => {
    const [itemsState, setItemsState] = useState([]);

    const [personState, setPersonState] = useState({
        birth_year: '19BBY',
        eye_color: 'blue',
        gender: 'male',
        name: 'Luke Skywalker',
        id: '665becf8-b443-4323-b083-4b07c35fec39'
    });

    const [isLoading, setIsLoading] = useState(false);

    const requestData = () => {
        if (Peoples) {
            setPersonState({
                birth_year: '19BBY',
                eye_color: 'blue',
                gender: 'male',
                name: 'Luke Skywalker',
                id: '665becf8-b443-4323-b083-4b07c35fec39'
            });
            return 'people';
        }
        if (Planets) {
            setPersonState({
                ['diameter']: '10465', birth_year: "", eye_color: "", gender: "",
                rotation_period: '23',
                population: '200000',
                name: 'Tatooine',
                id: '665becf8-b443-4323-b083-4b07c35ec393'
            });
            return 'planets';
        }
        if (Starships) {
            setPersonState({
                birth_year: "", eye_color: "", gender: "",
                hyperdrive_rating: '2.0',
                length: '150',
                starship_class: 'corvette',
                id: '665becf8-b443-4323-b083-4b07c35ec394',
                name: 'CR90 corvette'
            });
            return 'starships';
        }
    };
    console.log("oienoe");

    useEffect(() => {
        fetchData();
    }, [Peoples, Planets, Starships]);

    const fetchData = async (): Promise<void> => {
        setIsLoading(true);
        await fetch(`https://swapi.dev/api/${requestData()}`)
            .then((response) => response.json())
            .then((itemsApi) =>
                setItemsState(
                    itemsApi.results.map((item: { id: string; name: string }) => ({
                        ...item,
                        id: uuidv4()
                    }))
                )
            );
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    const clickHandle = (id: string) => {
        const filteredData = itemsState.filter((item) => item.id === id);
        if (filteredData.length > 0) {
            setPersonState(filteredData[0]);
        }
    };

    const renderTitleComponent = itemsState.map(({ id, name }) => (
        <TitleComponent
            key={id}
            itemName={name}
            handleClick={() => clickHandle(id)}
        />
    ));
    return (
        <div style={{ position: 'relative' }}>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}
            >
                <List
                    dense
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                >
                    {renderTitleComponent}
                </List>
                <List dense sx={{ width: '100%', maxWidth: 360 }}>
                    <KartisComponent kartisProps={personState} />
                </List>
            </div>
            <RingLoader size={150} color={'#123abc'} loading={isLoading} />
        </div>
    );
};

export default Api;