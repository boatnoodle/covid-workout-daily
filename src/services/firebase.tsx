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

export const addProgram = async (payload) => {
  const createdAt = firebase.firestore.FieldValue.serverTimestamp();

  try {
    const response = await firebase
      .firestore()
      .collection("programs")
      .add({ ...payload, createdAt });

    return response;
  } catch (error) {
    console.log("Error getting documents: ", JSON.stringify(error));
  }
};

export const getProgram = async () => {
  try {
    const response = await firebase
      .firestore()
      .collection("programs")
      .orderBy("created", "desc")
      .get();

    return response;
  } catch (error) {
    console.log("Error getting documents: ", JSON.stringify(error));
  }
};

export const getPrograms = async (setState) => {
  firebase
    .firestore()
    .collection("programs")
    .get()
    .then(function (querySnapshot) {
      let datas = [];
      querySnapshot.forEach(function (doc) {
        datas = [...datas, doc.data()];
      });
      setState(datas);
    })
    .catch((error) => {
      console.log("Error getting documents: ", JSON.stringify(error));
    });
};

export const getExercises = (setState) => {
  firebase
    .firestore()
    .collection("exercises")
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
