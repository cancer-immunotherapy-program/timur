class PlotsController < ApplicationController
  include ManifestHelper

  before_filter :authenticate, only: :index
  before_filter :ajax_req_authenticate, except: :index
  before_filter :plot_auth, except: :index
  layout 'timur'

  def index
    @project_name = params[:project_name]
    @manifest_id = params[:manifest_id]
    @id = params[:id]
    @is_editing = params[:is_editing]
  end

  def create
    @plot = @manifest.plots.new(plot_params)
    @plot.configuration = plot_configuration
    save_plot
  end

  def update
    return unless find_plot(params[:id])
    @plot.assign_attributes(plot_params)
    @plot.configuration = plot_configuration
    save_plot
  end

  def destroy
    return unless find_plot(params[:id])
    delete(@plot)
  end

  private

  def plot_auth
    if params[:id]
      return unless find_plot(params[:id])
    end

    if !@manifest
      return unless find_manifest(params[:manifest_id])
    end

    return unless authorize
  end

  def find_plot(id)
    @plot = Plot.find_by_id(id)
    if @plot.nil?
      render :json => { :errors => ["Plot with id: #{id} does not exist."] }, :status => 404
    else
      @manifest = @plot.manifest
    end
    @plot
  end

  def save_plot
    if @plot.save
      render json: @plot.as_json(current_user, params[:project_name])
    else
      render :json => { :errors => @plot.errors.full_messages }, :status => 422
    end
  end

  def plot_configuration
    params.except(:name, :plot_type, :manifest_id, :id, :action, :controller, :project_name)
  end

  def plot_params
    params.permit(:name, :plot_type)
  end

end
