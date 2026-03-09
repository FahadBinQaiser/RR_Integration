require "test_helper"

class TaskTest < ActiveSupport::TestCase
  test "is invalid without a title" do
    task = Task.new(title: "", completed: false)
    assert_not task.valid?
  end
  test "is valid with a title and completed" do
    task = Task.new(title: "API Integration", completed: false)
    assert task.valid?
  end
  test "is invalid with nil completed" do
    task = Task.new(title: "API Integration", completed: nil)
    assert_not task.valid?
  end
end
