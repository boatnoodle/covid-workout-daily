import firebase from "utils/firebase";
import { UserFromProvider } from "hooks/auth/useSession";

export const addUser = async (user: UserFromProvider) => {
  const latestSignedIn = firebase.firestore.Timestamp.now();
  const createdAt = firebase.firestore.FieldValue.serverTimestamp();

  try {
    const response = await firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set({ ...user, createdAt, latestSignedIn });
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error getting documents: ", JSON.stringify(error));
  }
};

export const validateUser = async (user: UserFromProvider) => {
  try {
    const response = await firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .get();

    return response;
  } catch (error) {
    console.log("Error getting documents: ", JSON.stringify(error));
  }
};

export const signIn = async (user: UserFromProvider) => {
  const latestSignedIn = firebase.firestore.Timestamp.now();

  try {
    const response = await firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set({ ...user, latestSignedIn });

    return response;
  } catch (error) {
    console.log("Error getting documents: ", JSON.stringify(error));
  }
};

// return firebase
//     .firestore()
//     .collection("users")
//     .doc(user.uid)
//     .get()
//     .then((data) => console.log(data.data(), "data"))
//     .catch((err) => {
//       console.log("Error getting documents: ", JSON.stringify(err));
//     });

export const getProgramWorkout = (setState) => {
  firebase
    .firestore()
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
  firebase
    .firestore()
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
