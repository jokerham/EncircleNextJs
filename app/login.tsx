'use client'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

export default function LoginForm() {
  const validataionSchema = Yup.object().shape({
    userId: Yup.string().required("유저 아이디를 입력하세요."),
    password: Yup.string().required("패스워드를 입력하세요.")
  })

  const initialValues = {
    userId: "",
    password: ""
  }

  const onSubmit = async (values) => {
    console.log(values)
  }

  return (
    <div className="modal modal-sm fade" id="loginFormModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <Formik
            initialValues={initialValues}
            validataionSchema={validataionSchema}
            onSubmit={onSubmit}>
            <Form className="encircle-form">
              <div className="modal-header">
                <h6 className="modal-title" id="exampleModalLabel">로그인</h6>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <Field type="text" name="userId" placeholder="아이디" />
                <Field type="password" name="password" placeholder="비밀번호" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                <button type="submit" className="btn btn-primary">로그인</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}