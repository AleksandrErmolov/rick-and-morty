import React, { useCallback, useEffect, useState } from "react";
import { getApiResource } from "../../utils/network";
import { API_SEARCH } from "../../constants/api";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import SearchPageInfo from "../../components/SearchPageInfo/SearchPageInfo";
import { debounce } from "lodash";
import UiInput from "../../components/UI/UiInput/UiInput";

import styles from "./SearchPage.module.css";


const SearchPage = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);

    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH + param);
        console.log(res);

        if (res) {
            const peopleList = res.results.map(({ name, id, image }) => { 
                return {
                    id,
                    name,
                    img:image,
                }
            });
    
            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    };

    useEffect(() => {
        getResponse('');
    }, []);

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    );

    const handleInputChange = value => {
        setInputSearchValue(value);
        debouncedGetResponse(value);
    }

    return (
        <>
            <h1 className="header__text">Search</h1>

            <UiInput
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder="Input character's name"
                classes={styles.input__search}
            />

            <SearchPageInfo people={people} />
        </>
    )

};
export default withErrorApi(SearchPage);
