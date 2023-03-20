import React, { useState, useEffect } from "react ";
import toast, { Toaster } from "react-hot-toast";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy
} from "firebase/firestore";
import { db } from "../data/firebase.js";
import swal from "sweetalert";

export default function MailForm() {
  async function getEmail() {
    const emailUserQuery = query(
      collection(db, "emails"),
      orderBy("email", "asc")
    );

    onSnapshot(emailUserQuery, (QuerySnapshot) => {
      QuerySnapshot.forEach((snap) => {});
    });
  }

  const [fullName, setFullName] = useState({});
  const [email, setEmail] = useState({});

  useEffect(() => {
    getEmail();
  }, []);

  useEffect(() => {
    console.log(email, fullName);
  }, [email, fullName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adding info to database

    const userRef = db.collection("contacts");
    const setUser = userRef.doc(email.email, fullName.fullName);
    setUser.get().then((doc) => {
      if (doc.exists) {
        swal({
          title: "You've just subscribed to our newsletter",
          text: "Stay tuned to hear from us🥳",
          timer: 6000,
          icon: "success"
        });
      } else {
        userRef
          .doc(email.email, fullName.fullName)
          .set({
            name: fullName,
            email: email,
            id: uuidv1()
          })
          .then(() => {
            swal({
              title: "Good job!",
              text: "Stay tuned to hear from us🥳",
              timer: 6000,
              icon: "success"
            });

            const timer = setTimeout(() => {
              window.location.reload(false);
            }, 3000);
          })
          .catch((error) => {
            alert(error.message);
          });
      }
    });
  };

  return (
    <div>
      <form
        class="mx-auto flex w-full max-w-sm flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <div class="mb-6 md:flex md:items-center">
          <div class="md:w-1/3">
            <label
              class="mb-1  block pr-4 font-bold md:mb-0 md:text-right"
              for="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="w-full appearance-none rounded border-2 border-gray-200 bg-white py-2 px-4 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
              type="name"
              onChange={(e) =>
                setFullName({ ...fullName, fullName: e.target.value })
              }
            />
          </div>
        </div>
        <div class="mb-6 md:flex md:items-center">
          <div class="md:w-1/3">
            <label
              class="mb-1  block pr-4 font-bold md:mb-0 md:text-right"
              for="email"
            >
              Email Address
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="w-full appearance-none rounded border-2 border-gray-200 bg-white py-2 px-4 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
              placeholder="johndoe@gmail.com"
              onChange={(e) => setEmail({ ...email, email: e.target.value })}
            />
          </div>
        </div>
        <div class="mb-6 md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <label class="block font-bold text-gray-500 md:w-2/3">
            <input class="mr-2 leading-tight" type="checkbox" />
            <span class="text-sm">Send me your newsletter!</span>
          </label>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="btn-news focus:shadow-outline  rounded py-2 px-4 font-bold text-white shadow focus:outline-none"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
