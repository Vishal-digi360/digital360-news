import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import {
  GET_TRENDING_TOPICS,
  GET_NEWS_BY_CHANNEL,
  GET_All_TOPICS,
} from "../utils/api/requests";
import NewsSection from "../components/home/NewsSection";
import { useCategoryStore } from "../stores/categories";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const { news, bbc, cnn, nbc,trending,setTrending, setNews, setBBC, setCNN, setNBC } =
    useCategoryStore();

  const getTrendingTopics = async () => {
    const RESPONSE = await GET_TRENDING_TOPICS();
    if (RESPONSE.status === "ok") setTrending(RESPONSE?.articles?.reverse());
  };
  const getAllTopics = async () => {
    const RESPONSE = await GET_All_TOPICS();
    if (RESPONSE.status === "ok") setNews(RESPONSE?.articles?.reverse());
  };

  const getBBCNews = async () => {
    const RESPONSE = await GET_NEWS_BY_CHANNEL("bbc-news");
    if (RESPONSE.status === "ok") setBBC(RESPONSE?.articles);
  };

  const getCNNNews = async () => {
    const RESPONSE = await GET_NEWS_BY_CHANNEL("CNN");
    if (RESPONSE.status === "ok") setCNN(RESPONSE?.articles);
  };

  const getNBCNews = async () => {
    const RESPONSE = await GET_NEWS_BY_CHANNEL("nbc-news");
    if (RESPONSE.status === "ok") setNBC(RESPONSE?.articles);
  };

  useEffect(() => {
    getTrendingTopics();
    getBBCNews();
    getCNNNews();
    getNBCNews();
    getAllTopics()
  }, []);

  return (

    <>
   <Navbar/>
    <ScrollView style={{ flex: 1 }}>
      <View style={{flex: 1, marginBottom: 80 , marginTop:5}}>
        {/* Trending Topics */}
        <NewsSection
          title={"Trending Topics"}
          titleColor="#d71e1f"
          titleWeight="bold"
          titleSize={19}
          data={trending}
          useDefaultHeight={true}
        />

 {/* CY NEWS */}
 <NewsSection title={"Cyber Youth News"} titleSize={16} data={news} />

        {/* BBC */}
        <NewsSection title={"BBC News"} titleSize={16} data={bbc} />

        {/* CNN */}
        <NewsSection title={"CNN"} titleSize={16} data={cnn} />

        {/* NBC */}
        <NewsSection title={"NBC"} titleSize={16} data={nbc} />
      </View>
    </ScrollView>
    </>
    
  );
};

export default Home;
