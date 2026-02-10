class TaskController < ApplicationController
    def index 
        @tasks = Task.all
    end
    def create 
        @task = Task.new(task_params)
        if task.save
            render json: @task, status: :created
        else
            render json: { errors: @task.error.full_messages }, status: :unprocessable_entity 
        end
    end
    private 

    def task_params
        params.require(:task).permit(:title, :completed)
    end
end
