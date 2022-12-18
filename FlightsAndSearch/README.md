/
    - src/
        index.js // server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repository/
    - tests/ [later]

## DB Design
    - Airplane Table(
        -ID,
        -model_number,
        -capacity, 
        -created_at,
        -updated_at
    )
    - Flight(
        -ID,
        -src_airport_id,
        -dest_airport_id,
        -dept_date,
        -arrival_date,
        -dept_time,
        -arrival_time,
    )
    - Airport(
        -ID,
        -name,
        -city_id,
        -address
    )
    - City(
        -ID,
        -name
    ) 


    - A flight belongs to an airplane but one airplane can be used in multiple flights
    - A city has many airports but one airport belongs to a city
    - A airport can have many flights but a flight will be from 1 airport
    