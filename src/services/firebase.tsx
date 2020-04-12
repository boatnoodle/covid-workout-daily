// import firebase from "firebase";
import { Firebase } from "components/Firebase/firebase";

const firebase = new Firebase() as any;

export const getProgramWorkout = (setState) => {
  firebase.db
    .collection("programWorkout")
    .orderBy("created", "desc")
    .get()
    .then(function (querySnapshot) {
      let datas = [];
      querySnapshot.forEach(function (doc) {
        datas = [...datas, doc.data()];
      });
      setState(datas);
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
};

export const getExercise = (setState) => {
  firebase.db
    .collection("exercise")
    .get()
    .then(function (querySnapshot) {
      let datas = [];
      querySnapshot.forEach(function (doc) {
        datas = [...datas, doc.data()];
      });
      setState(datas);
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
};
