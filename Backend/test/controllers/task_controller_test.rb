require "test_helper"

class TaskControllerTest < ActionDispatch::IntegrationTest
  test "GET /tasks return 200" do
    get tasks_url, as: :json
    assert_response :success
  end
end
