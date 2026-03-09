require "test_helper"

class TaskControllerTest < ActionDispatch::IntegrationTest
  test "GET /tasks return 200" do
    get tasks_url, as: :json
    assert_response :success
  end
  test "POST /tasks return 201" do
    post tasks_url, params: { task: { title: "Hello API", completed: true } }, as: :json
    assert_response :created
  end
  test "POST /tasks return 422" do
    post tasks_url, params: { task: { title: nil, completed: false } }, as: :json
    assert_response :unprocessable_entity
  end
end
